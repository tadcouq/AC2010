import promptSync from 'prompt-sync';
import fs from 'fs';
const filename = './dataStudent.json';
const data = fs.readFileSync(filename, 'utf8');
const arrSV = JSON.parse(data);
const prompt = promptSync();
export function list(){
    console.clear();
    console.log("Danh sách sinh viên: ");
    console.log(arrSV);
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
}