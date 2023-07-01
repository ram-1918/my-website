from django.urls import path
from .views import portfolioInfoAPI, createUser, UpdateUser, getLikes, updateLike, FeedbackAPI, FeedbackDeleteAPI

urlpatterns = [
    path('get-info/', portfolioInfoAPI.as_view()),
    path('post-user/', createUser.as_view()),
    path('patch-user-data/<int:pk>', UpdateUser.as_view()),
    path('get-likes/', getLikes.as_view()),
    path('update-like/', updateLike.as_view()),
    path('post-feedback/', FeedbackAPI),
    path('update-feedback/', FeedbackDeleteAPI.as_view())
]




'''
// import {useRef} from 'react'; 
import axios from 'axios';
function Footer({likes, dislikes, id, isLiked, isDisliked}){

    function handleLike(type){
        if(type && isLiked){return }
        if(!type && isDisliked){return }
        const url = "http://127.0.0.1:8000/port-api/update-like/";

        console.log(url, type)
        type ? 
        axios.put(url, {"data":{"viewer":id, "liked": true, "disliked":false}})
        .then((res) => {
            isLiked = res.data['liked']
            isDisliked = res.data['disliked']
            likes += 1;
            alert(likes)
            type && isDisliked ? dislikes -= 1 : console.log("already disliked so liked");
            console.log("liked yay", res.data, isLiked, isDisliked); 
        })
        .catch(err => console.log(err)) :
        axios.put(url, {"data":{"viewer":id, "liked": false, "disliked":true}})
        .then((res) => {
            isLiked = res.data['liked']
            isDisliked = res.data['disliked']
            dislikes += 1;
            alert(dislikes)
            type && isLiked ? likes -= 1 : console.log("already disliked so liked");
            // !type && liked ? setLikes((prev) => prev-1) : console.log("already liked so disliked");
            console.log("disliked ymy", res.data, isLiked, isDisliked); 
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div id="footer" className="bg-inherit w-[35%] h-[78%] flex flex-col justify-around items-center text-white mx-auto p-4 small:w-full mobile:w-full tablet:w-full">
                <form className="w-full flex flex-col items-center justify-around space-y-2 p-4" submit="">
                    <span className="flex">{likes}
                        <span className="text-[2.5rem] font-bold text-[#D1D2D3] small:text-[1.5rem]">C</span>
                        <span className="text-[2.5rem] font-bold text-[#D1D2D3] border-b-2 border-b-rose-200 w-[100px] small:text-[1.5rem] small:w-[60px]">ontact</span>
                    </span>
                    <span className="text-md font-light small:text-[0.7rem] mobile:text-sm">Please provide a feedback or get in touch!</span>
                    <input type="text" placeholder="Email" className="border-none outline-none p-2 pl-2 bg-gray-200 text-md font-normal text-black w-[80%] rounded-md" required autoFocus/>
                    <textarea placeholder="Message" className="border-none outline-none p-2 pl-2 text-md bg-gray-200 font-normal text-black w-[80%] rounded-md" rows="5" required></textarea>
                    <span>
                        <label for="recruiter">Are you a Recruiter? </label>
                        <input type="checkbox" id="recruiter"></input>
                    </span>
                    <button className="p-2 m-2 bg-red-900 rounded-lg">Submit</button>
                </form>
                <div className="flex flex-col justify-center items-center space-y-4 mb-8 ">
                    <span className="p-4 text-md font-light small:text-[0.7rem] mobile:text-[0.8rem]">Please give a thumbs up if you like my Portfolio, Thanks!</span>
                    <div className="flex flex-row justify-center items-center space-x-4">
                        <span>{likes} <button onClick={() => handleLike(1)}><i class="fa fa-thumbs-up" style={{fontSize: "24px", color: isLiked ? "red":"grey"}}></i></button></span>
                        <span>{dislikes} <button onClick={() => handleLike(0)}><i class="fa fa-thumbs-down" style={{fontSize: "24px", color: isDisliked ? "red":"grey"}}></i></button></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center space-x-4 text-white w-full mb-20 small:space-x-2 mobile:space-x-2 p-[1px]">
                <div className="small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:text-[0.8rem]">
                    <span className="text-md small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-home"></i> Binghamton, NY</span>
                    <span className="text-md small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-phone"></i> +1 (716) 617-1918</span>
                    <span className="text-md small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-envelope"></i> rcb.26498@gmail.com</span>
                </div>
                <div className="small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:mt-4 small:text-[0.8rem]">
                    <span className="text-md small:text-[0.8rem] mobile:text-[0.8rem] px-2"><i class="fab fa-linkedin-in"></i> LinkedIn</span>
                    <span className="text-md small:text-[0.8rem] mobile:text-[0.8rem] px-2"><i class="fab fa-github"></i> GitHub</span>
                </div>
            </div>
            <div className="w-full p-2 text-center mb-10 animate-bounce">
                <a href="#navbar" className=""><i class="fa fa-arrow-up" style={{color: "#D1D2D3", fontSize:"2rem"}}></i></a>
            </div>
        </>
    )
}

export default Footer;

'''