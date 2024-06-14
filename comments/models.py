from django.db import models

# Create your models here.

class Comments(models.Model):
    comments = models.CharField( max_length = 10000)

    def __str__(self):
        return self.comments