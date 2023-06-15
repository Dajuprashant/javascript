const Day9 = () => {
  let a = prompt("what is your age?")
  a = Number.parseInt(a);
  if (a < 10) {
    alert("you are a kid. Don't event think  of going to bar")
  }
  else if (a > 9 && a < 18) {
    alert("you have to wait more. you are not eligible")
  }
  else {
    alert("you can enjoy in the club. Be nice with everyone")
  }
  
  return (
    <div>

    </div>
  )
}
export default Day9