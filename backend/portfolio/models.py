from django.db import models

# Create your models here.


'''
Users
1. id
2. date_created
3. name
4. scrollPos
5. percent scrolled
6. reachedBottom - boolean
7. device
8. total screen size
9. likes
10. dislikes

total views - total users
total viewers reached bottom - reachedBottom == True 
viewers viewed until where? - scrollPosition percent
on app Unmount - find scrollpos, scrollpercent

Feedbacks
1. emailid
2. feedback
3. recruiter - boolean (send my info)
4. date_created

likes
1. userid - foriegn key
2. liked? - boolean
post -
    if not liked yet:
        increment count
        update status to liked
        return liked: true
    return liked: true
'''
class Viewers(models.Model):
    date_created = models.DateTimeField(auto_now=True)
    viewer = models.CharField(max_length=255)
    scroll_pos = models.CharField(max_length=255, blank=True, null=True)
    percent_scrolled = models.CharField(max_length=50, blank=True, null=True)
    reached_bottom = models.BooleanField(default=False)
    device = models.CharField(max_length=255, blank=True, null=True)
    screen_size = models.CharField(max_length=255, blank=True, null=True)
    views = models.CharField(max_length=255, blank=True, null=True)

    def save(self, *args, **kwargs):
        super(Viewers, self).save(*args, **kwargs)

    def __str__(self):
        return self.viewer
    
    class meta:
        verbose_name = "Viewers"

class LikesModel(models.Model):
    viewer = models.ForeignKey(Viewers, on_delete=models.CASCADE)
    liked = models.BooleanField(default=False)
    disliked = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        super(LikesModel, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.viewer)
    
    class meta:
        verbose_name = "LikesModel"

class Feedbacks(models.Model):
    email = models.CharField(max_length=255)
    feedback = models.CharField(max_length=255)
    recruiter = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
    
    class meta:
        verbose_name = "Feedbacks"
    

class FeedbacksPree(models.Model):
    email = models.CharField(max_length=255)
    feedback = models.CharField(max_length=255)
    recruiter = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email
    
    class meta:
        verbose_name = "FeedbacksPree"
