import React from 'react';
import axios from 'axios';

const DownloadExcel = () => {
  const jsonPayload = [{
    "StockCode": "101164431221",
    "ProductCode": "101164431221",
    "ProductName": "Test Prod check bar img",
    "ShortDescription": "Test Prod",
    "LongDescription": "",
    "ItemType": "1",
    "Brand": "Test Manuf",
    "Category": "P Cat",
    "ParentCategory": "Cat",
    "CostPrice": "816.00",
    "Listprice": "1485",
    "SellPrice": "1350.00",
    "Currency": "GBP",
    "CurrentStock": "100",
    "ColorText": "Black",
    "ColorHex": "#000000",
    "Visible": "0",
    "Published": "1",
    "Length": "360",
    "Width": "30",
    "Height": "21",
    "Weight": "0.260"
  }];

  const handleDownload = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7085/api/Export/download-excel', // Your API endpoint
        jsonPayload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'blob' // Important to get a blob response for file downloads
        }
      );

      // Create a link element to trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'ExportData.xlsx'); // File name
      document.body.appendChild(link);
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default DownloadExcel;
