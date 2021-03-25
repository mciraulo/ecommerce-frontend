

export const feedbackFields = {
	id: { type: 'id', label: 'ID' },
firstname: { type: 'string', label: 'First Name',

    },
lastname: { type: 'string', label: 'Last Name',

    },
rating: { type: 'int', label: 'Rating',

    },
avatar: { type: 'string', label: 'Avatar',

    },
review: { type: 'string', label: 'Review',

    },
datetime: { type: 'datetime', label: 'Date',

    },

user: { type: 'relation_one', label: 'Related User',

    },
product: { type: 'relation_one', label: 'Related Products',

    },

}

const Component = () => {
    return null
  }
  
  export async function getServerSideProps(context) {
    // const res = await axios.get("/products");
    // const products = res.data.rows;
  
    return {
      props: {  }, // will be passed to the page component as props
    };
  }
  
  export default Component
