import { useEffect, useState } from 'react'
import { Button, Card, ListGroup, Spinner } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const MovieDetails = () => {
  const { movieId } = useParams()
  console.log('MOVIEID', movieId)

  const navigate = useNavigate()

  const [movieObject, setMovieObject] = useState(null)
  const [comments, setComments] = useState([])

  const fetchMovieObject = () => {
    fetch('http://www.omdbapi.com/?apikey=24ad60e9&i=' + movieId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella fetch')
        }
      })
      .then((movie) => {
        setMovieObject(movie)
      })
      .catch((err) => console.log(err))
  }

  const fetchMovieComments = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + movieId, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NTU5MDQzYTU2ODAwMTU4ZWM0N2QiLCJpYXQiOjE3MjQzMzk2MDAsImV4cCI6MTcyNTU0OTIwMH0.3s4fBf_wAd6_WnhGb2s25J5AGcbrlGuBdE9CbFjQhPQ',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('errore nella fetch')
        }
      })
      .then((movieComments) => {
        setComments(movieComments)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchMovieObject()
    fetchMovieComments()
  }, [])

  return (
    <>
      {movieObject ? (
        <Card>
          <Card.Img variant="top" src={movieObject.Poster} />
          <Card.Body>
            <Card.Title>{movieObject.Title}</Card.Title>
            <Card.Text>{movieObject.Plot}</Card.Text>
            <Card.Text>
              {movieObject.Director} - {movieObject.Year}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate('/')
              }}
            >
              Torna in Home
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
      <ListGroup>
        {comments.length > 0 ? (
          comments.map((c) => {
            return <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
          })
        ) : (
          <ListGroup.Item>
            Non ci sono recensioni per questo film
          </ListGroup.Item>
        )}
      </ListGroup>
    </>
  )
}

export default MovieDetails
