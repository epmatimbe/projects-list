# Use the official Nginx image as the base image
FROM nginx:1.24

# Copy custom configuration file to the container (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

COPY ./build/ /usr/share/nginx/html

# Expose port 80 for HTTP and 443 for HTTPS
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]