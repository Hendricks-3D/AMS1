export function generateGuid(): string {
  const hexChars = '0123456789abcdef';
  const buffer = new Array(36);

  for (let i = 0; i < 36; i++) {
    switch (i) {
      case 8:
      case 13:
      case 18:
      case 23:
        buffer[i] = '-';
        break;
      case 14:
        buffer[i] = '4';
        break;
      case 19:
        buffer[i] = hexChars[(Math.random() * 4) | 8];
        break;
      default:
        buffer[i] = hexChars[Math.floor(Math.random() * 16)];
        break;
    }
  }

  return buffer.join('');
}
