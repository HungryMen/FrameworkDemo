from django.db import models

# Create your models here.
class News(models.Model):
    create = models.DateTimeField(auto_now_add = True)
    update = models.DateTimeField(auto_now = True)
    title = models.CharField(max_length = 100, blank = False)
    subtitle = models.CharField(max_length = 300, blank = True, default = '')
    tags = models.CharField(max_length = 200, blank = True, default = '')
    content = models.TextField()

    author = models.ForeignKey('auth.User', related_name='news')



