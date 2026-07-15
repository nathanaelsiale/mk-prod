from django.db import models

# Create your models here.

class Photo(models.Model):
    CATEGORY_CHOICES = [
        ('portrait', 'Portrait'),
        ('mariage', 'Mariage'),
        ('evenement', 'Événement'),
        ('paysage', 'Paysage'),
    ]

    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='photo/')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title