var y = prompt('whats your name?');
alert('Hello Lets make sure you are not a robot, ' +y)
var x = prompt("x=1+4, the value of x is :")
// if (x == '5') 
// {
//     alert("you can now visit our website, Enjoy ");
//     var fav = prompt('Now let us know what your is your favourte game ?' , 'Cyberpunk 2077,League of legends,Dota');
//     document.write('<h3>' +fav+'</h3>')
//     if (fav === 'Cyberpunk 2077')
//     { document.write('<img src ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/download2526.jpg">')
//     alert('you have choosen a fantastic game ' +y)}
//     else if (fav === 'League of legends') 
//     {document.write('<img src ="https://miro.medium.com/max/3760/1*JzJBaliMfb9R_kEAPQaw5g.png">' ) 
//     alert('you have choosen a fantastic game ' +y)}
//     else if (fav === 'Dota') {document.write('<img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/mistwoods_blog_dsflkjsdalfkj.jpg">')
//     alert('you have choosen a fantastic game ' +y)}
// }
// else alert('Hello Robot , you can only view our basic content :) ')

// enter his age
// >= 18 && <35 
//<18 && >35
 var age=prompt("what is your age ?" + y);
 if (age >=18 && age < 36){ alert('Welcome to my website, ' + y)}
 else if (age <18 || age > 35){ alert('sorry not allowed!! ' + y) }
 else { alert('have a nice day, ' + y) }
// 

// guess a password
var pass=prompt('Try to guess the password ' + y )
var gpass='easy';
//while 
while (pass != gpass){ pass = prompt('Please try again')}
alert('Nice guess, ' + y);

//var gfav=prompt('whats your fav online game ')
//fav1='League of legends';
//fav2= 'Dota'; 
//while (gfav !== fav1 && gfav !== fav2)
//{ gfav = prompt('Please try again')}
//alert('Nice guess again '+ y);
var h = 0;
if (x == '5') 
{
    var fav = prompt('Now let us know what your is your favourte game ?' , 'Cyberpunk 2077,League of legends,Dota');
    var h=prompt('how many times you would like to see it before downloading it')
    document.write('<h3>' +fav+'</h3>')
    if (fav === 'Cyberpunk 2077')
    { alert('You have choosen a fantastic game ' +y)
        for (var i=0;i<h;i++)
        {
            document.write('<img src ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/download2526.jpg">')
        }
    }
    else if (fav === 'League of legends')
    {
        alert('You have choosen a fantastic game ' +y)
        for (var i=0;i<h;i++)
        {  
             document.write('<img src ="https://miro.medium.com/max/3760/1*JzJBaliMfb9R_kEAPQaw5g.png">' )
        } 
    
    }
    else if (fav === 'Dota')
   { 
       alert('You have choosen a fantastic game ' +y)
        for (var i=0;i<h;i++)
        {
            document.write('<img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/mistwoods_blog_dsflkjsdalfkj.jpg">')
        }
   }
}
else alert('Hello Robot , you can only view our basic content :) ')