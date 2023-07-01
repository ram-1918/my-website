from rest_framework import serializers

from .models import Viewers, LikesModel, Feedbacks

class ViewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viewers
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LikesModel
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedbacks
        fields = '__all__'
