import * as bcrypt from 'bcryptjs';

export async function hashPassword(textPassword: string) {
  const salt = await bcrypt.genSalt();
  console.log("Password new: " + textPassword)
  const hash = await bcrypt.hash(textPassword, salt);
  return hash;
}

export async function compareHashPassword(requestPassword: string, userPassword: string) {
  return await bcrypt.compare(requestPassword, userPassword);
}