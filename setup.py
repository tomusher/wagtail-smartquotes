from setuptools import setup, find_packages

INSTALL_REQUIRES = [
    'Wagtail<2.4',
]

TESTING_REQUIRES = [

]

setup(
    name="wagtail-smartquotes",
    version="0.1.1",
    description="Smart quotes for Wagtail",
    author="Mike Monteith",
    author_email="<mike.monteith@nhs.net>",
    install_requires=INSTALL_REQUIRES,
    packages=find_packages(),
    include_package_data=True,
    extras_require={'testing': TESTING_REQUIRES},
)
