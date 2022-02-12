from django.urls import path
from .views import PostList, PostDetail, CreatePost

app_name = 'blog_api'

# endpoints
urlpatterns = [
    path('<int:pk>/',PostDetail.as_view(), name = 'detailcreate'),
    path('', PostList.as_view(), name ='listcreate'),
    path('create', CreatePost.as_view(), name='createpost'),
]
