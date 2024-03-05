const NumberUtils = {
  getRandomNumber:(min:number, max:number)=>{
    // 生成介于min和max之间的随机数（包括min和max）
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
export default NumberUtils