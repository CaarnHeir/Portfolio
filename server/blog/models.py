from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename):
    return 'posts/{filename}'.format(filename=filename)

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
    image = models.ImageField(_('Image'), upload_to=upload_to, default='posts/default.jpg')
    objects = models.Manager()

    class Meta:
        ordering = ('-published',)
            
        def __str__(self):
            return self.title
