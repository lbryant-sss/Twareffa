from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    birthday = models.DateField()
    profile_picture = models.ImageField(blank=True, null=True)
    phone = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.user.username