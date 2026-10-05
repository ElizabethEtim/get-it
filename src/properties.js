const properties = [
    {
        id: 1,
        title: "Two-bedroom Apartment",
        price: "₦1,400,000",
        location: "Akai Efa, Calabar",
        category: "Rent an Apartment",
        contact: "+234 806 756 8978",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "One-bedroom Apartment",
        price: "₦800,000",
        location: "Marian, Calabar",
        category: "Rent an Apartment",
        contact: "+234 800 123 4567",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Three-bedroom Apartment",
        price: "₦1,600,000",
        location: "State Housing, Calabar",
        category: "Rent an Apartment",
        contact: "+234 801 234 5678",
        imageUrl: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Selfcon Apartment",
        price: "₦400,000",
        location: "Atimbo, Calabar",
        category: "Rent an Apartment",
        contact: "+234 802 345 6789",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Single Room",
        price: "₦150,000",
        location: "Mount Zion, Calabar",
        category: "Rent an Apartment",
        contact: "+234 803 456 7890",
        imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "One-bedroom Apartment",
        price: "₦800,000",
        location: "Parliamentary, Calabar",
        category: "Rent an Apartment",
        contact: "+234 804 567 8901",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Selfcon Apartment",
        price: "₦2,100,000",
        location: "Satellite Town, Calabar",
        category: "Rent an Apartment",
        contact: "+234 805 678 9012",
        imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "Two-bedroom Apartment",
        price: "₦700,000",
        location: "Ete Agbor, Calabar",
        category: "Rent an Apartment",
        contact: "+234 806 789 0123",
        imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        title: "One-bedroom Apartment",
        price: "₦600,000",
        location: "8 Miles, Calabar",
        category: "Rent an Apartment",
        contact: "+234 807 890 1234",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        title: "SelfconApartment",
        price: "₦500,000",
        location: "Ekorinim 1, Calabar",
        category: "Rent an Apartment",
        contact: "+234 808 901 2345",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80&sat=-15",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80&sat=-15"
    },
    {
        id: 11,
        title: "Three-bedroom Apartment",
        price: "₦1,600,000",
        location: "Akai Efa, Calabar",
        category: "Rent an Apartment",
        contact: "+234 809 012 3456",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80&sat=-15",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80&sat=-15"
    },
    {
        id: 12,
        title: "One-bedroom Apartment",
        price: "₦700,000",
        location: "Ikot Efa, Calabar",
        category: "Rent an Apartment",
        contact: "+234 810 123 4567",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    }
];

export default properties;