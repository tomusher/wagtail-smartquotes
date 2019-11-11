from setuptools import setup, find_packages

TESTING_REQUIRES = [

]

setup(
    name="wagtail-smartquotes",
    version="0.1.2",
    description="Smart quotes for Wagtail",
    author="Mike Monteith",
    author_email="<mike.monteith@nhs.net>",
    packages=find_packages(),
    include_package_data=True,
    extras_require={'testing': TESTING_REQUIRES},
)
