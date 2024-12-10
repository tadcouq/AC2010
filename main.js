import {list} from './list.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
let exit = false;
function error(){
    console.clear();
    console.log("Lệnh không hợp lệ");
    let command = prompt("Nhấn phím Enter để tiếp tục");
    return;
}
while (!exit){
    console.clear();
    console.log("Quản lý kết quả học tập của sinh viên ĐHBKHN");
    console.log("Các lệnh có thể dùng:");
    console.log("1.list: in ra danh sách sinh viên");
    console.log("2.find <mssv>: tìm sinh viên với mã số sinh viên");
    console.log("3.modify cpa <mssv> <cpa>: cập nhật điểm CPA của sinh viên");
    console.log("4.findtop n: tìm n sinh viên có CPA cao nhất");
    console.log("5.findbottom n: tìm n sinh viên có CPA thấp nhất");
    console.log("6.find canhcao: tim các sinh viên đang bị cảnh cáo, kèm mức cảnh cáo, 1, 2, 3")
    console.log("7.cnt a b: đếm số sinh viên có điểm cpa nằm trong đoạn [a, b]");
    console.log("8.exit: thoát chương trình");
    let command = prompt("Nhập lệnh: ");
    let commandArr = command.split(" ");
    if (commandArr[0] === "exit"){
        exit = true;
        break;
    }
    else{
        switch (commandArr[0]){
            case "list":
                list();
                break;
            case "find":
                console.log("find");
                break;
            case "modify":
                console.log("modify");
                break;
            case "findtop":
                console.log("findtop");
                break;
            case "findbottom":
                console.log("findbottom");
                break;
            case "find":
                console.log("find");
                break;
            case "cnt":
                console.log("cnt");
                break;
            default:
                error();
                break;
        }
    }
}