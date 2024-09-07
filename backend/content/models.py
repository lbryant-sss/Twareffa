from django.db import models
from django.utils import timezone
from django.conf import settings
import humanize
import uuid
import mimetypes
from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible

@deconstructible
class FileValidator:
    "Accept videos or images only"
    allowed_types = ['image', 'video']

    def __call__(self, value):
        file_type, _ = mimetypes.guess_type(value.name)

        if file_type is None or not any(file_type.startswith(t) for t in self.allowed_types):
            raise ValidationError("Unsupported file type. Only images and videos are allowed!")

class ContentModel(models.Model):
    post_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='content')
    text_content = models.TextField(max_length=500)
    media_content = models.FileField(
        upload_to='uploads/',
        validators=[FileValidator()],
        blank=True,
        null=True,
    )
    created_on = models.DateTimeField(auto_now_add=True)

    def time_since_creation(self):
        """To compute human readable time"""
        now = timezone.now()
        time_difference = now - self.created_on
        readable_time = humanize.naturaltime(time_difference)

        return readable_time
    
    def __str__(self):
        return f"{self.time_since_creation()}"