import { useEffect, useState } from 'react';

const API_KEY = 'qxr7zAhhcw8GMP0eEnRKuSdgNmqa8Pm1R4SvDyYsi6SQcoje0d5205Bl';

const usePexelsVideos = ({ type = 'popular', query = '', perPage = 10 }) => {
  // type: 'popular' or 'search'

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        let url = '';

        if (type === 'popular') {
          url = `https://api.pexels.com/videos/popular?per_page=${perPage}`;
        } else if (type === 'search') {
          url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=${perPage}`;
        }

        const response = await fetch(url, {
          headers: { Authorization: API_KEY },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.videos);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [type, query, perPage]);

  return { videos, loading, error };
};

export default usePexelsVideos;