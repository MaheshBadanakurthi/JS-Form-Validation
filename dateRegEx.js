function validate(){
  let setDate =  document.getElementById('datePattern').value
 let dateRegex= / \d[0-9]{2}.\d[0-9]{2}.\d[0-9]{4} /
let dateResult=dateRegex.test(setDate);

}