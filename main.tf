provider "google" {
  project = "your-gcp-project-id"
  region  = "us-central1"
}

# 1. Enable Cloud Run API
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"
}

# 2. Create the Cloud Run Service
resource "google_cloud_run_service" "portfolio_service" {
  name     = "my-portfolio-service"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/your-gcp-project-id/my-portfolio:latest"
        
        resources {
          limits = {
            memory = "512Mi"
          }
        }
        
        ports {
          container_port = 80
        }
      }
    }
  }

  traffic {
    percent = 100
    latest_revision = true
  }

  depends_on = [google_project_service.run_api]
}

# 3. Allow public access (so everyone can see your site)
resource "google_cloud_run_service_iam_member" "public_access" {
  service  = google_cloud_run_service.portfolio_service.name
  location = google_cloud_run_service.portfolio_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Output the URL
output "url" {
  value = google_cloud_run_service.portfolio_service.status[0].url
}
