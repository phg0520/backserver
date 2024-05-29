import app from './app.js';
import prisma from './prisma/client.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`서버가 ${PORT} 포트에서 실행 중입니다`);
    });
  } catch (error) {
    console.error(`서버 실행 실패: ${error.message}`);
    process.exit(1);
  }
};

startServer();
