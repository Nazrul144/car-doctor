export const getTestimonialData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial/api`);
  const data = await res.json();
  return data;
};
