// Bạch Đăng Dũng 20194253
export function getPrice(str: string) {
  str = str.toString();

  let index = str.length;
  while (index > 3) {
    str = str.slice(0, index - 3) + "." + str.slice(index - 3);

    index -= 3;
  }
  return str + " VND";
}
export function compareMonth(date:number){
const a=new Date(date)
const b=new Date(Date.now())
  const compare=a.getMonth()===b.getMonth()
if(compare){
  return true
}




  return false
}