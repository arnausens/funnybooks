import axios from 'axios';  
import history from "../history";
import swal from 'sweetalert';


const authRepository = () => {  
 let debug = true;  
  
    let baseUrl = 'http://arnausens.pythonanywhere.com/rest-auth';  
    let userUrl = 'http://arnausens.pythonanywhere.com/api/auth/me/';  

    const tokenName = 'user_uaeh_token';  
    const getLocalToken = () => {  
        return JSON.parse(localStorage.getItem(tokenName));  
    };  

    const logIn = user => {  
        return new Promise((resolve, reject) => {  
            const instance = axios.create({  
                baseURL: baseUrl,  
                headers: {  
                    'Content-Type': 'application/json'  
                }  
            });   
            instance.post('login/', user)  
            .then(r => {  
                localStorage.setItem(tokenName, JSON.stringify(r.data.key)); 
                resolve(r.data);
            }).catch(e => {  
                console.log(e);   
                reject(e.response);  
            }); 
        }); 
    };  
    const signUp = user => {  
        return new Promise((resolve, reject) => {  
            const instance = axios.create({  
                baseURL: baseUrl,  
                headers: {  
                    'Content-Type': 'application/json'  
                }  
            });  
            instance.post('registration/', user)  
            .then(r => {  
                localStorage.setItem(tokenName, JSON.stringify(r.data.key));  
                resolve(r.data);  
            }).catch(e => {  
                console.log(e);  
                reject(e.response);  
            }); 
        }); 
    };  
    const logOut = () => {  
        return new Promise((resolve, reject) => {  
            const instance = axios.create({  
                baseURL: baseUrl,  
                headers: {  
                    'Content-Type': 'application/json'  
                }  
            });  

            instance.post('logout/', {})  
            .then(r => {  
                swal("HASTA PRONTO!!","", "success");
                localStorage.removeItem(tokenName);
                localStorage.removeItem('users')  
                history.push('/')
                resolve(r.data);  
            }).catch(e => {  
                console.log(e);  
                reject(e.response);  
            }); 
        }); 
    };
    
    const checkIn = () => {  
        return new Promise((resolve, reject) => {  
            const instance = axios.create({  
                baseURL: baseUrl,  
                headers: {  
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json',
                    "Authorization" : 'Token ' + getLocalToken()
                } 
            });  
            instance.get('user/', {})  
            .then(r => {  
                console.log(r,'success') 
                resolve(r.data);  
            }).catch(e => {  
                history.push('/')
                swal('Ooops!', "Debes estar logueado.", "warning") 
                reject(e.response);  
            }); 
        }); 
    };
    
    return {  
        logIn,  
        signUp,  
        logOut,
        checkIn
    }  
};  
  
export default authRepository();