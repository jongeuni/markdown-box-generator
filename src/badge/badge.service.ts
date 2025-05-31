// src/badge/badge.service.ts
import { Injectable } from '@nestjs/common';
import { createCanvas } from 'canvas';

@Injectable()
export class BadgeService {
  createBadge(name: string, title: string, date: string, link: string, theme: string): Buffer {
    const width = 500;
    const height = 200;
    
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // 배경 색상 설정 (테마에 따라 다르게 설정)
    ctx.fillStyle = theme === 'tistory' ? '#ff6600' : '#3498db';
    ctx.fillRect(0, 0, width, height);
    
    // 제목 텍스트
    ctx.fillStyle = '#ffffff';
    ctx.font = '30px Arial';
    ctx.fillText(title, 20, 50);
    
    // 날짜 및 이름
    ctx.font = '20px Arial';
    ctx.fillText(`${date} by ${name}`, 20, 100);
    
    // 링크
    ctx.font = '15px Arial';
    ctx.fillText(link, 20, 150);

    // 이미지 버퍼 반환
    return canvas.toBuffer('image/png');
  }
}
