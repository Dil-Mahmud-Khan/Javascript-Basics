


//event onload onerror 
//property
//function  open() send() setRequestHeader()

const makeRequest= (method,url)=>{
    
        const xhr= new XMLHttpRequest();
        xhr.open(method,url);

        xhr.onload=()=>{
            let data=xhr.response;
            console.log(JSON.parse(data));
        }

        xhr.onerror=()=>{
            console.log('error is here');
        }
        xhr.send();
    }

    const getData=()=>{
        makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    }
    const sendData=()=>{
        makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts');
    }
    // const updatedata=()=>{
    //     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts',{
    //         id:1,
    //         title:'dil',
    //         body:'bar',
    //         userID: 123,
    //     });
   // }


//sendData();
getData();
// updatedata();
