
const requestUrl = 'https://api.github.com/users/raisak6022'

const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function (){
    console.log(xhr.readyState);
if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText)
    console.log(typeof data);
    console.log(data.avatar_url);
}
}
xhr.send()