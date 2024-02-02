const btn=document.querySelector('.Login').addEventListener('click',()=>{
    document.querySelector('.container').classList.add('change');
});
function send(){
    var name=document.getElementById('username');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var address=document.getElementById('address');
    var drop=document.getElementById('drop');
    var date=document.getElementById('date');
    var gender=document.getElementsByName('gender');
    var g;
    for(var i=0; i<gender.length;i++)
    {
        if(gender[i].checked)
        {
            g=gender[i].value;
        }
    } 
    var hobby1=document.getElementsByName('hobby');
    var c="";
    for(var i=0; i<hobby1.length;i++)
    {
        if(hobby1[i].checked)
        {
            c=c+hobby1[i].value+" , ";
        }
    }  
    alert("Name = "+name.value +"\n"+ "Email = "+email.value +"\n"+"Password = "+password.value +"\n"+"Gender = "+g+"\n"+ "Hobby = "+c +"\n"+"Address = "+address.value +"\n"+"Country = "+drop.value +"\n"+"Date Of Birth = "+date.value);
}