from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog_api.urls', namespace='blog_api')),
    path('', include('blog.urls', namespace='blog')),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
    
# urlpatterns += [re_path('', TemplateView.as_view(template_name='index.html'))]
