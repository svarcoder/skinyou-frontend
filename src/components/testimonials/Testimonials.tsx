import React from "react";

import "./Testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This is the best service I have ever used.",
  },
  { id: 2, name: "Jane Smith", feedback: "Highly recommend to everyone!" },
  {
    id: 3,
    name: "Sam Wilson",
    feedback: "Exceptional quality and great support.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <h1></h1>
    // <Box className="testimonials-container">
    //   <Typography variant="h4" align="center" gutterBottom>
    //     Testimonials
    //   </Typography>
    //   <Box className="testimonial-cards">
    //     {testimonials.map((testimonial) => (
    //       <Card key={testimonial.id} className="testimonial-card">
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             "{testimonial.feedback}"
    //           </Typography>
    //           <Typography variant="h6" sx={{ marginTop: "10px" }}>
    //             - {testimonial.name}
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </Box>
    // </Box>
  );
};

export default Testimonials;
