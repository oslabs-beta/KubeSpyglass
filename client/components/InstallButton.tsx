import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Axios from "axios";

const InstallButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStartInstallation = () => {
    // Simulate Axios request for installation
    Axios.get("http://localhost:4000/setup/start")
      .then((response) => {
        // Handle success, e.g., show a success message or open modal
        console.log("Installation started successfully:", response.data); // Set isModalOpen to true to open the modal

        setIsModalOpen(true);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error starting installation:", error);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleStartInstallation}>
        Install Prometheus/Grafana
      </button>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Installation Success</DialogTitle>

        <DialogContent>
          <p>Your installation has completed successfully.</p>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InstallButton;
