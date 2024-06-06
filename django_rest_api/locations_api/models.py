from django.db import models

# Create your models here.
class Location(models.Model):
    street = models.CharField(max_length=32)
    city = models.CharField(max_length=24)
    state = models.CharField(max_length=2)
