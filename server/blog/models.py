from django.db import models
from django.utils import timezone


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1
    )
    title = models.CharField(max_length= 400)
    excerpt = models.TextField(null =True)
    content = models.TextField()
    published = models.DateField(default=timezone.now)
    image = models.ImageField()
    objects = models.Manager()

    class Meta:
        ordering = ('-published',)
            
        def __str__(self):
            return self.title
