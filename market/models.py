from django.db import models

# Create your models here.


class mostSold(models.Model):
    imgLink = models.CharField(max_length = 2000)
    name =  models.CharField(max_length = 25)
    price = models.IntegerField()


class Gadget(models.Model):
    imgLink = models.CharField(max_length = 2000)
    name =  models.CharField(max_length = 25)
    price = models.IntegerField()
