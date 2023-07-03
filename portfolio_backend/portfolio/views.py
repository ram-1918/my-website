from django.shortcuts import render

from .models import Viewers, LikesModel, Feedbacks
from .serializers import ViewerSerializer, LikeSerializer, FeedbackSerializer

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, APIView
from rest_framework.authentication import BasicAuthentication 
from rest_framework.permissions import IsAuthenticated

import secrets

from .services import send_email_verification

# Create your views here.

def generate_16_digit_token():
    choices = '0123456789'
    token = ''
    for i in range(16):
        token += secrets.choice(choices)
    return token

# Create anonymous viewer
from django.db.models import Count

class portfolioInfoAPI(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        total_viewers = len(Viewers.objects.all())
        viewers_reachedEnd = len(Viewers.objects.filter(reached_bottom = True))
        total_likes = len(LikesModel.objects.filter(liked=True))
        total_dislikes = len(LikesModel.objects.filter(disliked=True))
        total_feedbacks = (Feedbacks.objects
                            .values('email')
                            .annotate(uniqueFeedbacks = Count('email'))
                            .order_by())
        return Response({
            "count": total_viewers, 
            "reached_bottom": viewers_reachedEnd,
            "likes_percent": (total_likes/(total_likes + total_dislikes))*100 if total_likes and total_dislikes else 0,
            "feedbacks_percent":(len(total_feedbacks)/total_viewers)*100 if total_viewers else 0,
            "feedback_info": total_feedbacks
            })
        # return Response("worked")

class createUser(generics.ListCreateAPIView):
    queryset = Viewers.objects.all()
    serializer_class = ViewerSerializer

    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # generate unique string for each viewer
        # 3 types - 
        #   1. once app created - viewer, device, screen_size; 
        #   2. scrolled to bottom - update reached_bottom = true;
        #   3. once app unmounted - screen_pos, percent_scrolled
        if request.data['type'] == 1:
            viewer = generate_16_digit_token()
            request.data['data']["viewer"] = viewer
            obj = request.data['data']
            serializer = ViewerSerializer(data = obj)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)            
        
class UpdateUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = Viewers.objects.all()
    serializer_class = ViewerSerializer

    def patch(self, request, pk):
        if request.data['type'] == 2:
            # viewer = request.data['data']
            obj = Viewers.objects.get(pk = pk)
            obj.reached_bottom = True
            obj.save()
            return Response({"result": True})
        elif request.data['type'] == 3:
            viewer = request.data['data']['viewer']
            obj = Viewers.objects.filter(viewer=viewer).first()
            obj.scroll_pos = request.data['data']['scroll_pos']
            obj.percent_scrolled = request.data['data']['percent_scrolled']
            obj.save()
            return Response("update screen_pos, percent_scrolled")

class getLikes(generics.ListCreateAPIView):
    queryset = LikesModel.objects.all()
    serializer_class = LikeSerializer

    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

class updateLike(generics.RetrieveUpdateDestroyAPIView):
    queryset = LikesModel.objects.all()
    serializer_class = LikeSerializer

    def put(self, request):
        viewer = request.data['data']['viewer']
        liked = request.data['data']['liked']
        disliked = request.data['data']['disliked']
        obj = LikesModel.objects.filter(viewer = viewer)
        if not obj:
            serializer = LikeSerializer(data={"viewer": viewer, "liked": liked, "disliked": disliked})
            serializer.is_valid(raise_exception = True)
            serializer.save()
            total_likes = len(LikesModel.objects.filter(liked=True))
            total_dislikes = len(LikesModel.objects.filter(disliked=True))
            return Response({"liked":liked, "disliked":disliked ,"likes_count": total_likes, "dislikes_count": total_dislikes})
        else:
            obj = LikesModel.objects.get(id=obj[0].id)
            obj.liked = request.data['data']['liked']
            obj.disliked = request.data['data']['disliked']
            obj.save()
            total_likes = len(LikesModel.objects.filter(liked=True))
            total_dislikes = len(LikesModel.objects.filter(disliked=True))
        return Response({"liked":liked, "disliked":disliked, "likes_count": total_likes, "dislikes_count": total_dislikes})

class GetFeedbacks(generics.ListAPIView):
    queryset = Feedbacks.objects.all()
    serializer_class = FeedbackSerializer

    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]

@api_view(['POST'])
def FeedbackAPI(request):
    if request.method == 'POST':
        serializer = FeedbackSerializer(data = request.data) # serializing the request data 
        recruiter = request.data['recruiter']
        msg = request.data['feedback']
        if serializer.is_valid():
            serializer.save()
            send_email_verification(serializer['email'], recruiter, msg)
            # print("succuss")
            return Response({"email":serializer['email'].value}, status = status.HTTP_201_CREATED)
        return Response(serializer.errors)
    else:
        data = Feedbacks.objects.all()
        serializer = FeedbackSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class FeedbackDeleteAPI(generics.RetrieveDestroyAPIView):
    queryset = Feedbacks.objects.all()
    serializer_class = FeedbackSerializer

    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
'''
{
    "type": 1,
    "data":{
        "scroll_pos":"",
        "percent_scrolled": "",
        "reached_bottom": false
        "device": "",
        "screen_size": "",
        "likes": "",
        "dislikes": ""
    }
}

{
    "type": 2,
    "data":{
        "viewer": 9760796691369736,
        "reached_bottom": false
    }
}
gunicorn --bind 0.0.0.0:8000 portfolio_backend.wsgi:application

ssh -i ~/webdevs/backend/Projects.pem ubuntu@18.219.131.21

'''