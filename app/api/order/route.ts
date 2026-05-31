import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import nodemailer from 'nodemailer'

// ---- Types ----
interface OrderData {
  name: string
  phone: string
  address: string
  product: string
  quantity: string
  payment: string
  note: string
}

// ---- Google Sheets ----
async function appendToSheet(order: OrderData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Trang tính1!A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        timestamp,
        order.name,
        order.phone,
        order.address,
        order.product,
        order.quantity,
        order.payment,
        order.note,
        'Chờ xác nhận',
      ]],
    },
  })
}

// ---- Email ----
async function sendEmailNotification(order: OrderData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,       // truong3031992@gmail.com
      pass: process.env.GMAIL_APP_PASSWORD, // App Password (không phải mật khẩu Gmail thường)
    },
  })

  const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })

  await transporter.sendMail({
    from: `"Sắn Dây Quê" <${process.env.GMAIL_USER}>`,
    to: 'lienhe@sandayque.com',
    subject: `🛍️ Đơn hàng mới từ ${order.name} — ${order.phone}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #3d782d; color: white; padding: 20px; border-radius: 12px 12px 0 0;">
          <h2 style="margin: 0;">🌿 Sắn Dây Quê — Đơn hàng mới!</h2>
          <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">${timestamp}</p>
        </div>
        <div style="background: #f5f9f0; padding: 24px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">👤 Họ tên</td><td style="padding: 8px 0; font-weight: bold;">${order.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">📞 Điện thoại</td><td style="padding: 8px 0; font-weight: bold;"><a href="tel:${order.phone}" style="color: #3d782d;">${order.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">📍 Địa chỉ</td><td style="padding: 8px 0;">${order.address}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">🛍️ Sản phẩm</td><td style="padding: 8px 0;">${order.product}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">🔢 Số lượng</td><td style="padding: 8px 0;">${order.quantity}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">💳 Thanh toán</td><td style="padding: 8px 0;">${order.payment}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">📝 Ghi chú</td><td style="padding: 8px 0;">${order.note || '(không có)'}</td></tr>
          </table>
          ${process.env.GOOGLE_SHEET_ID ? `
          <div style="margin-top: 20px; padding: 12px; background: white; border-radius: 8px; text-align: center;">
            <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}"
               style="color: #3d782d; font-weight: bold; text-decoration: none;">
              📊 Xem tất cả đơn hàng trong Google Sheets →
            </a>
          </div>` : ''}
        </div>
      </div>
    `,
  })
}

// ---- API Handler ----
export async function POST(req: NextRequest) {
  try {
    const order: OrderData = await req.json()

    // Validate
    if (!order.name || !order.phone || !order.address || !order.product) {
      return NextResponse.json({ error: 'Thiếu thông tin bắt buộc' }, { status: 400 })
    }

    const hasSheets = !!(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID)
    const hasEmail = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)

    const tasks: Promise<void>[] = []
    if (hasSheets) tasks.push(appendToSheet(order))
    if (hasEmail) tasks.push(sendEmailNotification(order))

    if (tasks.length > 0) {
      await Promise.all(tasks)
    } else {
      // Chưa cấu hình env — log ra console để dev thấy
      console.log('[ORDER - chưa có .env.local]', JSON.stringify(order, null, 2))
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Lỗi server, vui lòng thử lại' }, { status: 500 })
  }
}
