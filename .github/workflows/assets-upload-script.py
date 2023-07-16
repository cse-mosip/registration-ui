import os
import sys
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

connect_str = os.getenv('AZURE_STORAGE_CONNECTION_STRING')
container_name = os.getenv('BLOB_STORAGE_CONTAINER_NAME')

# Creating the BlobServiceClient object
blob_service_client = BlobServiceClient.from_connection_string(connect_str)

try:
    container_client = blob_service_client.get_container_client(container_name)

    # Check if the command line argument is provided
    if len(sys.argv) < 2:
        print("Please provide the file path as a command line argument.")
        sys.exit(1)

    upload_file_path = sys.argv[1]
    local_file_name = os.path.basename(upload_file_path)

    # Create a blob client using the local file name as the name for the blob
    blob_client = blob_service_client.get_blob_client(container=container_name, blob=local_file_name)

    print("\nUploading to Azure Storage as blob:\n\t" + local_file_name)

    # Check if the blob already exists in the container
    if blob_client.exists():
        print("Deleting existing blob...")
        blob_client.delete_blob()
        print("Successfully deleted...")

    # Upload the created file
    try:
        print("Uploading the blob...")
        with open(file=upload_file_path, mode="rb") as data:
            blob_client.upload_blob(data)
        print("Uploaded successfully.")
        sys.exit(0)

    except Exception as e:
        print("Error occurred while uploading the file:", e)
        sys.exit(1)


except Exception as e:
    # Container does not exist
    print("Container named " + container_name + " does not exist in blob storage.")
    sys.exit(1)

# python .\.github\workflows\assets-upload-script.py ".github/workflows/assets/Test.txt"
# https://testmosipcdn.azureedge.net  => CDN endpoint hostname
