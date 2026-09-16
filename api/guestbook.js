export default function handler(req, res) {
  if (req.method === 'POST') {
    // POST 데이터 처리 로직 (DB 저장 또는 이메일 전송 등)
    const data = req.body;
    return res.status(200).json({ message: '성공적으로 전송되었습니다.', data });
  } else {
    // POST 이외의 요청 차단
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}