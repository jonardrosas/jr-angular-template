rm -rf build
rm -rf prodbuild.zip
ng build --base-href /app/
zip -r prodbuild.zip dist

