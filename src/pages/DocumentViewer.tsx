import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FetchDocumentsClient } from "../services/profileService";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Props {
  documentId: string;
}

const DocumentViewer = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const { data } = useQuery({
    queryFn: FetchDocumentsClient.getAll,
    queryKey: ["all-documents"],
  });

  //   useEffect(() => {
  //     // Fetch the document from the server

  //     axios
  //       .get(`https://dev-api.gettonote.com/api/v1/documents`, {
  //         responseType: "blob",
  //       })
  //       .then((response) => {
  //         setFile(URL.createObjectURL(response.data));
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching the document:", error);
  //       });
  //   }, [documentId]);

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Box h="100vh" maxW="container.xl" mx="auto" p={8}>
      <HStack
        maxW="container.xl"
        paddingX="60px"
        mx="auto"
        p={8}
        justifyContent="center"
        gap="20%"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={1}>
          Document Viewer
        </Text>
        <Button
          colorScheme="blue.200"
          bg="blue.200"
          letterSpacing={1.2}
          fontSize="sm"
          fontWeight="bold"
          mb={1}
        >
          Back to Profile
        </Button>
      </HStack>

      <Flex justifyContent="center" alignItems="center" direction="column">
        {/* {!file ? (
          <Spinner />
        ) : (
          <Document
            file="/sample.pdf"
            // onLoadSuccess={handleDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        )} */}

        <Box
        //   height="90vh" // Set the height as appropriate for your layout
          //  width="100%" // You can also set a fixed width if you prefer
          //   display="flex"
          //  justifyContent="center"
          //  alignItems="center"
          overflowY="hidden" // Hide overflow to ensure only one page is visible
        >
          <Document
            file="/sample.pdf"
            onLoadSuccess={handleDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </Box>
      </Flex>
      <ButtonGroup w="100%" justifyContent="center" gap="5%" spacing={4} mt={4}>
        <Button
          onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
          disabled={pageNumber <= 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
          disabled={pageNumber >= numPages}
        >
          Next
        </Button>
        <Button onClick={() => setScale(scale + 0.1)}>Zoom In</Button>
        <Button onClick={() => setScale(Math.max(0.5, scale - 0.1))}>
          Zoom Out
        </Button>
      </ButtonGroup>
      <Text w="100%" textAlign="center" mt={4}>
        Page {pageNumber} of {numPages}
      </Text>
    </Box>
  );
};

export default DocumentViewer;
