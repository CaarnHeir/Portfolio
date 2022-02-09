from django.contrib import admin
from . import models

@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'excerpt', 'content', 'image', 'published', 'id')

admin.site.register(models.Category)