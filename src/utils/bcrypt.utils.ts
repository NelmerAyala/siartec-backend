import * as bcrypt from 'bcryptjs';

export async function hashPassword(textPassword: string) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(textPassword, salt);
  return hash;
}