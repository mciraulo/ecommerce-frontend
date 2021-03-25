

const feedbackFields = {
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

export default feedbackFields;
