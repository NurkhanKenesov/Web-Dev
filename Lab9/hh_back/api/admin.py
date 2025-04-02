from django.contrib import admin
from .models import Company, Vacancy
# Register your models here.

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name','city')
    search_fields = ('name','city')
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name','company','salary')
    list_filter = ('company',)
    search_fields = ('name','descreption')
admin.site.register(Company, CompanyAdmin)
admin.site.register(Vacancy, VacancyAdmin)