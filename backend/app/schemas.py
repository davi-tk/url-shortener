from .models import Url

def original_url_data(url):
    return {
        "original_url" : url["original_url"]
    }

def shortened_url_data(url : Url, **kwargs):
    return {
        "id" : str(kwargs["id"]),
        "shortened_url" : url.shortened_url
    }